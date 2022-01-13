import Navigo from "navigo";
import header from "./pages/header";
import home from "./pages/home";
import signin from "./pages/signin";


const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("menu").innerHTML = header.render();
    document.getElementById("lab3").innerHTML = content;
}
router.on({
    "/": () => {
        print(home.render());
    },
    "/signin": () => {
        print(signin.render());
    },
    "/signup": () => {
        print()
    }
});
router.resolve();