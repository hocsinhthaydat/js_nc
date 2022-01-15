import data from "../src/data";

const content = {
    render() {
        return /* html */ `
            <main>
            <div>
              <a href="#"><img class="m-auto mt-2" src="https://picsum.photos/1025/264" alt=""></a>
            </div>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                    <div class="border p-4">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>                    
                        <p>${post.desc}</p>
                    </div>
                `).join("")}
            </div>
          </main>
        `;
    },
};
export default content;