import footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newsList";

const NewsPage = {
    render() {
        return `
            ${Header.render()}
            ${NewsList.render()}
            ${footer.render()}
            `;
    },
};
export default NewsPage;