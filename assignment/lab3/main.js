import Navigo from "navigo";
import menu from "./pages/menu";
import signin from "./pages/signin";


const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("menu").innerHTML = menu.render();
    document.getElementById("lab3").innerHTML = content;
}
router.on({
    "/": () => {
        print(menu.render());
    },
    "/signin": () => {
        print(signin.render());
    },
});
router.resolve();