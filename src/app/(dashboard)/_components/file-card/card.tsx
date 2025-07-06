import { IFile } from '@/lib/database/schema/file.model'
import { cn, dynamicDownload, formatFileSize } from '@/lib/utils';
import {
  Card,
  
  CardContent,
  
 
  CardHeader,

} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import FileMenu from './menu';
import { P } from '@/components/custom/p';
import { format } from 'date-fns';
import { useState } from 'react';
import { generateUrl } from "@/action/file.action";
import { toast } from 'sonner';

const FileCard = ({file}:{file:IFile}) => {
  const [isLinkInProgress,setIsLinkInProgress]=useState(false);
  const {name,size,createdAt,userInfo,category}=file;
  const requiredName=`${name.slice(0,16)}....${name.split(".")[1]}`;

  const formattedFileSize=formatFileSize(size);
  return  (
    <Card className="w-full max-h-60 border-none shadow-none drop-shadow-xl">
  <CardHeader>
    <div className="flex items-start gap-4 justify-between">
      <Avatar className="size-20 rounded-none">
  <AvatarImage src={`/${category}.png`} />
  <AvatarFallback>{name.slice(0,2)}</AvatarFallback>
</Avatar>
<div className="flex flex-col items-end gap-4 justify-between w-full">
      <FileMenu 
      file={file}
              isLinkInProgress={isLinkInProgress}
              setIsLinkInProgress={setIsLinkInProgress}
              />
      <P>{formattedFileSize}</P>
    </div>
    </div>
    
  </CardHeader>
  <CardContent className="space-y-2">
    <P size="large" weight="bold" className={cn(
      category==="image" && "cursor-pointer"
    )}
    onClick={async ()=>{
      if(category==="image"){
        setIsLinkInProgress(true);

        const {data,status}=await generateUrl(file.cid);
        if(status!==201){
          toast("Error",{
            description:`${data}`,
          });
          setIsLinkInProgress(false);
          return;
        }

        setIsLinkInProgress(false);
       await dynamicDownload(data as string, file.name);


      }
    }}
    >
      {requiredName}

    </P>

    <P size="small" variant="muted" weight="light">
      {format(createdAt,"dd-MM-yyyy")}
    </P>

    <P size="small" variant="muted" weight="light">
      Uploaded By:<b>{userInfo.name}</b>

    </P>
  </CardContent>
  
</Card>
  );
  
}

export default FileCard
