let myLeads = []
const inputEl = document.getElementById('input-el')
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


// Get the leads from the localStorage - PS: JSON.parse()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    console.log( localStorage.getItem("myLeads") )
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
    }
    
    ulEl.innerHTML = listItems
}
