//This component can be used as <ResponsiveImage props/>
/* props consist of:
    _______________________
    | 1 | type   | ds, dr |
    | 2 | small  | <url>  |
    | 3 | medium | <url>  |
    | 4 | large  | <url>  |
    | 5 | xlarge | <url>  |
    _______________________

*/
const ResponsiveImage = (props) => {

    //this object comprises of css styles that can be used as an inline style object for 'img' tag
    const mystyle = {
        maxWidth: "100%", //when this component is used within a parent div, maxWidth as 100% will not allow the image to overflow
        height: "auto" //height auto will make sure that the height of the image is automatically adjusted in accordance with the width of it
    };

    //there are two types, 'dr' and 'ds' which stands for different sizes and different resolutions, respectively.
    if(props.type === "ds"){
    
        return (
            //three different sizes are provided: 300w, 768w, 1280w and 3000w for 'small', 'medium', 'large' and 'xlarge' images respectively
            //user needs to provide three types of images: small, medium and large which will be displayed depending on the size of the viewport
            <div>
                <img
                src={props.small} 
                srcSet={`${props.small} 300w, ${props.medium} 768w, ${props.large} 1280w, ${props.xlarge} 3000w`} 
                style={mystyle}
                />
             </div>
        );
    }

    //for using different resolutions
    else if(props.type === "dr"){

        return (
            //similarly for different resolutions, there are three different scales: 1x, 1.5x,2x and 2.5x for 'small', 'medium', 'large' and 'xlarge' respectively
            <div>
                <img 
                src={props.small} 
                srcSet={`${props.small} 1x, ${props.medium} 1.5x, ${props.large} 2x, ${props.xlarge} 2.5x`} 
                style={mystyle}
                />
            </div>
        );
    }
}

export default ResponsiveImage