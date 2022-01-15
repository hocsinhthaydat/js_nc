import content from "./content";
import footer from "./footer";
import header from "./header";

const home = {
    render() {
        return /* html */ `
            <div>${header.render()}</div>    
            <div>${content.render()}</div>    
            <div>${footer.render()}</div>    
        `;
    },
};
export default home;
