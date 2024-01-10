

export const Contenteditable = ()=>{
     return(
        <div>
        <h1>Hey, the below text is editable</h1>
        <p contentEditable={true}>Hey, edit me</p>
        </div>
     )
}