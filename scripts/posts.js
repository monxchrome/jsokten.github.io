let main = document.getElementById('main');
let header = document.getElementById('header');
let d2 = document.getElementById('dropdown2');
let d3 = document.getElementById('dropdown3');

let posts = document.getElementById('posts')
let post = document.getElementById('post')

main.onclick = function () {
    header.classList.add('lineDown');
    posts.classList.add('lineDown');
}

d2.onclick = function () {
    header.classList.add('lineDown');
    posts.classList.add('lineDown');
}

d3.onclick = function () {
    header.classList.add('lineDown');
    posts.classList.add('lineDown');
}

d3.onclick = function () {
    header.classList.add('lineDown');
    posts.classList.add('lineDown');
}

posts.onclick = function () {
    header.classList.add('lineDown');
    posts.classList.add('lineDown');
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value => {
        for (const post of value) {
            let a = document.createElement('a');
            a.setAttribute('href' , `post-details-user.html?id=${post.userId}&pid=${post.id}`);
            a.setAttribute('onclick', `url=this.href;setTimeout(\'location.href=url\',2000);this.href=\'javascript:void(0)\';`)
            a.setAttribute('id', `pk-${post.id}`)
            a.classList.add('link-a');

            let div = document.createElement('div');
            div.classList.add('post');
            div.classList.add('opacity');
            div.classList.add('glow-on-hover')
            div.setAttribute('id', 'post')

            let divh1 = document.createElement('div');
            divh1.classList.add('text-div')

            let h5 = document.createElement('h5');
            h5.classList.add('text');
            h5.innerText = `${post.title}`;

            let divmail = document.createElement('div');
            divmail.classList.add('body-div');

            let p = document.createElement('p');
            p.classList.add('text-body')
            p.innerText = `${post.body}`;

            posts.appendChild(a);
            a.appendChild(div)
            div.append(divh1, divmail);
            divh1.appendChild(h5);
            divmail.appendChild(p);
        }
    })