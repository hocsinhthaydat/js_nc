import Banner from "../components/banner";
import footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newsList";

const HomePage = {
    render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
               ${Header.render()}
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div>
                    ${NewsList.render()}
                </div>
                ${footer.render()}
            </div>
        `;
    },
};
export default HomePage;