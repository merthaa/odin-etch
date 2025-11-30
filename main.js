const container = document.querySelector("#container");

function gridKotak(num) {
    let length = 500;
    for (i = 0; i < num * num; i++) {
        const gridKotak = document.createElement("div");
        gridKotak.className = "gridKotak";
        gridKotak.style.width = `${length / num}px`;
        gridKotak.style.height = `${length / num}px`;
        container.append(gridKotak);
    }
}

gridKotak(16);

function hoverChange(color) {
    const gridKotak = document.querySelectorAll(".gridKotak");
    gridKotak.forEach((gridKotak) => {
        gridKotak.addEventListener("mousemove", () => {
            gridKotak.style.backgroundColor = "Black"
        });
    });
}
hoverChange()


const ubahUkuranKotakBtn = document.createElement("button");
ubahUkuranKotakBtn.textContent = "Ubah ukuran Kotak";
document.body.before(ubahUkuranKotakBtn, container);

