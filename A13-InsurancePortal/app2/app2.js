let count1 = 0;
let count2 = 0;
let arr1 = ["text1", "text2", "text3"];
let arr2 = ["longText1", "longText2", "longText3"]
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let img = document.getElementById("img");
let selected = "dodgerblue";
let notselected = "rgba(0, 0, 0, 0.3)";

btn1.style.backgroundColor = selected;
btn2.style.backgroundColor = notselected;
btn3.style.backgroundColor = notselected;
img.src = "../assets/img1.avif";

btn1.onclick = function(){
	btn1.style.backgroundColor = selected;
	btn2.style.backgroundColor = notselected;
	btn3.style.backgroundColor = notselected;
	img.src = "../assets/img1.avif"
}

btn2.onclick = function(){
	btn1.style.backgroundColor = notselected;
	btn2.style.backgroundColor = selected;
	btn3.style.backgroundColor = notselected;
	img.src = "../assets/img2.avif"
}

btn3.onclick = function(){
	btn1.style.backgroundColor = notselected;
	btn2.style.backgroundColor = notselected;
	btn3.style.backgroundColor = selected;
	img.src = "../assets/img3.avif"
}

class DynamicText1 extends HTMLElement{
	connectedCallback(){
		this.style.display = "inline-block";
		this.innerHTML = arr1[count1];
		count1++;
	}
}

class DynamicText2 extends HTMLElement{
	connectedCallback(){
		this.style.display = "inline-block";
		this.innerHTML = arr2[count2];
		count2++;
	}
} 


customElements.define("dynamic-text1", DynamicText1);
customElements.define("dynamic-text2", DynamicText2);
