const container = document.querySelector('.container')

const generateMasonryGrid = (columns, posts) => {

    container.innerHTML = ''

    let columnWrappers = {}

    // create column item  array and add it to column wrapper object
    for(let i = 0; i < columns; i++) {
        columnWrappers[`column${i}`] = []
    }
   
    for(let i = 0; i < posts.length; i++) {
         const column = i % columns
         columnWrappers[`column${column}`].push(posts[i]) 
    }
    
    for(let i = 0; i < columns; i++) {
        let columnPosts = columnWrappers[`column${i}`]
        let column = document.createElement('div')
        column.classList.add('column' )

        columnPosts.forEach(post => {
            let divPost = document.createElement('div')
            divPost.classList.add('post')
            
            let image = document.createElement('img')
            image.src = post.images; 

            let overlay = document.createElement('div')
            overlay.classList.add('overlay')

            let title = document.createElement('h2')
            title.classList.add('title')
            title.innerText = post.title

            divPost.append(image, overlay)
            overlay.appendChild(title)
            column.appendChild(divPost)
  
        })
        container.appendChild(column)
       
    }
}

let previousScreenSize = window.innerWidth

window.addEventListener('resize', () => {
    imageIndex = 0

    if(window.innerWidth < 600 && previousScreenSize >= 600) {
        generateMasonryGrid(1, posts)
    } else if(window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
        generateMasonryGrid(2, posts)
    } else if(window.innerWidth >= 1000 && previousScreenSize < 1000) {
        generateMasonryGrid(3, posts)
    }
    previousScreenSize = window.innerWidth
})

if(previousScreenSize < 600) {
    generateMasonryGrid(1, posts)
} else if ( previousScreenSize >= 600 && previousScreenSize < 1000) {
    generateMasonryGrid(2, posts)
} else {
    generateMasonryGrid(3, posts)
}