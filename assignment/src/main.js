import Navigo from "navigo";
import AboutPage from "./pages/about";
import dashboard from "./pages/admin/dashboard";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/dashboard": () => {
        print(dashboard.render());
    },
});
router.resolve();