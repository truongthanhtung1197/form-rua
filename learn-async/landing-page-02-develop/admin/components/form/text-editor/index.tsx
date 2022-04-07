import dynamic from "next/dynamic";

const FileContentDynamic = dynamic(() => import("./textEditor.view"), { 
  ssr: false,
  loading: () => <div className="w-full h-96 flex items-center justify-center">Loading</div>
});

export default FileContentDynamic