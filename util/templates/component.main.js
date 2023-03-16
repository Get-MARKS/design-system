module.exports = (componentName) => ({
	content: `// Generated with util/createComponent.js
    import React, { useEffect, useState } from "react";
  
    import { ${componentName}Props } from "./${componentName}.types";
  
    import "./${componentName}.scss";

    const ${componentName}: React.ForwardRefRenderFunction<unknown, ${componentName}Props> = (props, ref) => {

        const { content } = props;
        
        return(
            <div ref={ref as React.MutableRefObject<HTMLButtonElement>} 
                data-testid="${componentName}" 
                className="ds__${componentName}">
                {content}
            </div>
        )
    };

    export default React.forwardRef<unknown, ${componentName}Props>(${componentName});
  
`,
	extension: `.tsx`,
});
