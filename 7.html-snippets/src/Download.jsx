

export const Download = ()=> {
    
    const url = "file:///C:/Users/dell/OneDrive/Desktop/JAVASCRIPT_n.pdf";
    return(
        <div>
        <p>Download below pdf by clicking on it</p>
        <a href={url} download>
          Download
        </a>
        </div>
    )
}