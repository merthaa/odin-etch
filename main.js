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

function removeKotak() {
    const gridKotak = document.querySelectorAll(".gridKotak");
    gridKotak.forEach((gridKotak) => {
        gridKotak.remove();
    });
}

let newNum = 0;
function newGridNum() {
    let value = false;
    while (!value) {
        newNum = +prompt("tambahkan angka antara 1 - 100");
        if (newNum === null) {
            alert("abnormal, try again!");
            continue;
        }
        if (
            isNaN(newNum) ||
            newNum < 1 ||
            newNum > 100 ||
            !Number.isInteger(newNum)
        ) {
            alert("masukin yang bener bang!");
        } else {
            value = true;
        }
    }
    return newNum;
}

ubahUkuranKotakBtn.addEventListener("click", () => {
    newNum = newGridNum();
    removeKotak();
    gridKotak(newNum);
    hoverChange();
});