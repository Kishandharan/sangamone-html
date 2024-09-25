let count1 = 0;
let count2 = 0;
let arr1 = ["text1", "text2", "text3"];
let arr2 = ["longText1", "longText2", "longText3"]

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
