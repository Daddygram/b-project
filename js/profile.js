// hamburger menu comes to life
const hamburger = document.querySelector("#burger")
const sidebar = document.querySelector(".sidebar")
const hamLinks = document.querySelectorAll(".hamburger-links")

hamburger.addEventListener("click", ()=> {
    sidebar.classList.toggle("hamActive")
})
hamLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.toggle("hamActive")
    });
});

//sidebar height fix on mobile

function setSidebarHeight() {
    var viewportHeight = window.innerHeight
    document.querySelector('.sidebar').style.height = viewportHeight + 'px'
}

document.addEventListener('DOMContentLoaded', setSidebarHeight)
window.addEventListener('resize', setSidebarHeight)

// profile page carousel
const profileCarouselButtons = document.querySelectorAll("[data-profileCarousel-buttons]")

profileCarouselButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.profileCarouselButtons === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        if (newIndex < 0) {
            newIndex = slides.children.length - 1
        } else if (newIndex >= slides.children.length) {
            newIndex = 0
        }

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// Adding pictures 
let pfp = document.querySelector(".pfp")
let inputpfp = document.getElementById("input-pfp")
let pfpIcon = document.getElementById("pfp-icon")

inputpfp.onchange = () => {
    pfp.src = URL.createObjectURL(inputpfp.files[0])
    pfpIcon.style.display = "none"
}

// creating my posts and accept posts
var postsContainer = document.querySelector(".profilePosts-container")
let msgNum = document.querySelector(".msg-num")
let myPostId = 1
let acceptPostId = 1

function addMyPost() {
    var post = document.createElement("div")
    post.className = "my-Post border relative"
    post.id = "myPost" + myPostId

    post.innerHTML = `
        <div class="acceptPost-content flexCenter">
            <div class="profileCircle border  flexCenter">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" id="picture"><g fill="#828282">
                    <path d="M1.5 32h29c.827 0 1.5-.673 1.5-1.5v-29c0-.827-.673-1.5-1.5-1.5h-29C.673 0 0 .673 0 1.5v29c0 .827.673 
                    1.5 1.5 1.5zM1 1.5a.5.5 0 0 1 .5-.5h29a.5.5 0 0 1 .5.5v29a.5.5 0 0 1-.5.5h-29a.5.5 0 0 1-.5-.5v-29z"></path>
                    <path d="M20.5 12.5c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2zm0-3a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1z"></path>
                    <path d="M4.5 25h23a.5.5 0 0 0 .5-.5v-20a.5.5 0 0 0-.5-.5h-23a.5.5 0 0 0-.5.5v20a.5.5 0 0 0 
                    .5.5zm.5-1v-5.638c.022-.016.047-.025.067-.045l5.116-5.116a.704.704 0 0 1 .972 0l7.521 7.521a.498.498 0 0 0 .699.008l3.866-3.672a.684.684 
                    0 0 1 .957-.015L27 20.095l.001.001V24H5zM27 5v13.618l-2.081-2.266a1.67 1.67 0 0 0-1.191-.495h-.001a1.67 1.67 0 0 
                    0-1.185.486l-3.504 3.328-7.176-7.177c-.639-.638-1.749-.637-2.386 0L5 16.971V5h22z"></path></g></svg>
            </div>
            <div class="acceptPost-text">
                <h5>Name surname</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span class="read-more-text hidden"> Accusantium, deserunt quo provident at sint dolor. </span> </p>
            </div>
        </div>
        <div class="myPost-buttons">
            <span class="read-more-btn pointer">read more</span>
            <svg fill="#000000" class="trashIcon absolute pointer" width="34px" height="34px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0">
                </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M831.24 280.772c5.657 
                    0 10.24-4.583 10.24-10.24v-83.528c0-5.657-4.583-10.24-10.24-10.24H194.558a10.238 10.238 0 00-10.24 10.24v83.528c0 5.657 4.583 10.24 10.24 
                    10.24H831.24zm0 40.96H194.558c-28.278 0-51.2-22.922-51.2-51.2v-83.528c0-28.278 22.922-51.2 51.2-51.2H831.24c28.278 0 51.2 22.922 51.2 
                    51.2v83.528c0 28.278-22.922 51.2-51.2 51.2z"></path><path d="M806.809 304.688l-58.245 666.45c-.544 6.246-6.714 11.9-12.99 11.9H290.226c-6.276 
                    0-12.447-5.654-12.99-11.893L218.99 304.688c-.985-11.268-10.917-19.604-22.185-18.619s-19.604 10.917-18.619 22.185l58.245 666.45c2.385 27.401 
                    26.278 49.294 53.795 49.294h445.348c27.517 0 51.41-21.893 53.796-49.301l58.244-666.443c.985-11.268-7.351-21.201-18.619-22.185s-21.201 
                    7.351-22.185 18.619zM422.02 155.082V51.3c0-5.726 4.601-10.342 10.24-10.342h161.28c5.639 0 10.24 4.617 10.24 10.342v103.782c0 11.311 9.169 
                    20.48 20.48 20.48s20.48-9.169 20.48-20.48V51.3c0-28.316-22.908-51.302-51.2-51.302H432.26c-28.292 0-51.2 22.987-51.2 51.302v103.782c0 11.311 
                    9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"></path><path d="M496.004 410.821v460.964c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 
                    20.48-20.48V410.821c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm-192.435 1.767l39.936 460.964c.976 11.269 10.903 19.612 
                    22.171 18.636s19.612-10.903 18.636-22.171l-39.936-460.964c-.976-11.269-10.903-19.612-22.171-18.636s-19.612 10.903-18.636 
                    22.171zm377.856-3.535l-39.936 460.964c-.976 11.269 7.367 21.195 18.636 22.171s21.195-7.367 
                    22.171-18.636l39.936-460.964c.976-11.269-7.367-21.195-18.636-22.171s-21.195 7.367-22.171 18.636z"></path></g></svg>
        </div>
    `

    // adding read more

    let readBtn = post.querySelector(".read-more-btn")
    let readTxt = post.querySelector(".read-more-text")

    readBtn.addEventListener("click", () => {
        readTxt.classList.toggle("hidden")
        readBtn.textContent = readBtn.textContent.includes("read more") ? "read less" : "read more";
    })

    postsContainer.appendChild(post)
    myPostId++

    var deleteIcon = post.querySelector(".trashIcon")
    deleteIcon.addEventListener("click", () => {
        removePost(post.id)
        if (myPostId > 1) {
            myPostId--
        }
    })
}

function addAcceptPost() {
    var post = document.createElement("div")
    post.className = "accept-Post border hidden"
    post.id = "acceptPost" + acceptPostId

    post.innerHTML = `
        <div class="acceptPost-content flexCenter">
            <div class="profileCircle border  flexCenter">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" id="picture"><g fill="#828282">
                    <path d="M1.5 32h29c.827 0 1.5-.673 1.5-1.5v-29c0-.827-.673-1.5-1.5-1.5h-29C.673 0 0 .673 0 1.5v29c0 .827.673 
                    1.5 1.5 1.5zM1 1.5a.5.5 0 0 1 .5-.5h29a.5.5 0 0 1 .5.5v29a.5.5 0 0 1-.5.5h-29a.5.5 0 0 1-.5-.5v-29z"></path>
                    <path d="M20.5 12.5c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2zm0-3a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1z"></path>
                    <path d="M4.5 25h23a.5.5 0 0 0 .5-.5v-20a.5.5 0 0 0-.5-.5h-23a.5.5 0 0 0-.5.5v20a.5.5 0 0 0 
                    .5.5zm.5-1v-5.638c.022-.016.047-.025.067-.045l5.116-5.116a.704.704 0 0 1 .972 0l7.521 7.521a.498.498 0 0 0 .699.008l3.866-3.672a.684.684 
                    0 0 1 .957-.015L27 20.095l.001.001V24H5zM27 5v13.618l-2.081-2.266a1.67 1.67 0 0 0-1.191-.495h-.001a1.67 1.67 0 0 
                    0-1.185.486l-3.504 3.328-7.176-7.177c-.639-.638-1.749-.637-2.386 0L5 16.971V5h22z"></path></g></svg>
            </div>
            <div class="acceptPost-text">
                <h5>Name surname</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span class="read-more-text hidden">Accusantium, deserunt quo provident at sint dolor.</span></p>
            </div>
        </div>
        <div class="acceptPost-buttons">
            <span class="pointer read-more-btn">read more</span>
            <span class="delete-acceptPost pointer">accept</span>
            <span class="delete-acceptPost pointer">reject</span>
        </div>
    `

    postsContainer.appendChild(post)

    var deleteIcon = post.querySelectorAll(".delete-acceptPost")
    deleteIcon.forEach(span => {
        span.addEventListener("click", () => {
            removePost(post.id)
            if (acceptPostId > 1) {
                acceptPostId--
            }
            msgNum.textContent = acceptPostId - 1
        })
    })
    
    // adding read more

  let readBtn = post.querySelector(".read-more-btn")
  let readTxt = post.querySelector(".read-more-text")

  readBtn.addEventListener("click", () => {
    readTxt.classList.toggle("hidden")
    readBtn.textContent = readBtn.textContent.includes("read more") ? "read less" : "read more";
  })

  // adding dynamic message number 
  
  msgNum.textContent = acceptPostId

  acceptPostId++
}

function removePost(postId) {
    var postToRemove = document.getElementById(postId)
    if (postToRemove) {
        postsContainer.removeChild(postToRemove)
    }
}

// adding two posts on page load
for (var i = 0; i < 2; i++) {
    addMyPost()
}
for (var i = 0; i < 2; i++) {
    addAcceptPost()
}

// filtering my posts and accept posts

let myPostBtn = document.querySelector(".myPost")
let acceptPostBtn = document.querySelector(".acceptPost")

let myPosts = postsContainer.querySelectorAll(".my-Post")
let acceptPosts = postsContainer.querySelectorAll(".accept-Post")

myPostBtn.addEventListener("click", () => {
    acceptPostBtn.classList.remove("active")
    myPostBtn.classList.add("active")
    acceptPosts.forEach(post => post.classList.add("hidden"))
    myPosts.forEach(post => post.classList.remove("hidden"))
  })
  
  acceptPostBtn.addEventListener("click", () => {
    myPostBtn.classList.remove("active")
    acceptPostBtn.classList.add("active")
    myPosts.forEach(post => post.classList.add("hidden"))
    acceptPosts.forEach(post => post.classList.remove("hidden"))
  })

  // new post 

  const newPost = document.querySelector(".newPost-container")
  const newPostBtn = document.querySelector(".newPost")
  const closeNewPost = document.querySelector(".addPost-x")
  const addPostBtn = document.querySelector(".addPost-btn")

  newPostBtn.addEventListener('click', () => {
    newPost.classList.remove("hidden")
  })
  closeNewPost.addEventListener('click', () => {
    newPost.classList.add("hidden")
  })
  addPostBtn.addEventListener('click', () => {
    newPost.classList.add("hidden")
  })
  


  // dropdown menu 
  const dropdowns = document.querySelectorAll(".dropdown")

  dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select")
    const caret = dropdown.querySelector(".caret")
    const menu = dropdown.querySelector(".dropdown-menu")
    const options = dropdown.querySelectorAll(".dropdown-menu li")
    const selected = dropdown.querySelector(".selected")

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked')
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('dropdown-menu-open')
        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText
                select.classList.remove("select-clicked")
                caret.classList.remove("caret-rotate")
                menu.classList.remove("dropdown-menu-open")
                options.forEach(option => {
                    option.classList.remove('dropdownActive')
                })
                option.classList.add("dropdownActive")
            })
        })
    })
  })
