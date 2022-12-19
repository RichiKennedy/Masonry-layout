const posts = []

const images = [
    "https://dr.savee-cdn.com/things/6/3/6f523f1eeac19188e84566.webp",
    'https://dr.savee-cdn.com/things/thumbnails/6/3/93d37fec2a18ed36e4c6d5.webp',
    'https://dr.savee-cdn.com/things/thumbnails/6/3/6d658d265e97bf22848f46.webp',
    'https://dr.savee-cdn.com/things/thumbnails/6/2/d75e640730c44be3047a6c.webp',
    'https://dr.savee-cdn.com/things/thumbnails/6/3/8f70f1212639aa100cf0ba.webp',
    'https://dr.savee-cdn.com/things/thumbnails/6/3/88e61ecc1ae0fdecaf5505.webp',
    'https://dr.savee-cdn.com/things/thumbnails/6/3/855aa69b6ab13074ba5bcd.webp',
    'https://dr.savee-cdn.com/things/6/2/7d3cfe8e6767045381f8e4.gif',
    'https://dr.savee-cdn.com/things/thumbnails/6/3/758e42e76b168aa5e3874b.webp',
    'https://dr.savee-cdn.com/things/thumbnails/6/3/72f62fbf8d7413cf2b2de1.webp'
]

let imageIndex = 0; 

for(let i = 0; i < 80; i++) {
    let item = {
        id: i,
        title: `post ${i}`,
        images: images[imageIndex ]
    }
    posts.push(item);
      imageIndex++
      if(imageIndex > images.length -1) imageIndex = 0;
}

console.log(posts)