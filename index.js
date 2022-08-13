let myLeads = `["www.awesomePossum.com"]`

myLeads = JSON.parse(myLeads)

myLeads.push("www.epicWeb.com")


const inputEl = document.getElementById('input-el')
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.setItem("myLeads, www.hotmal.com")
localStorage.getItem("myLeads")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})


function renderLeads() {
    let listItems = ""
    
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `       
        console.log(listItems)
    }
    
    ulEl.innerHTML = listItems
}
