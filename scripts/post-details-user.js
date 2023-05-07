let main = document.getElementById('main');
let header = document.getElementById('header');
let d2 = document.getElementById('dropdown2');
let d3 = document.getElementById('dropdown3');

let posts = document.getElementById('posts');
let user = document.getElementById('user');
let comments = document.getElementById('comments')

let link_a = document.getElementById('link-a');

main.onclick = function () {
    header.classList.add('lineDown');
    user.classList.add('lineDown');
    posts.classList.add('lineDown');
    comments.classList.add('lineDown')
}

d2.onclick = function () {
    header.classList.add('lineDown');
    user.classList.add('lineDown');
    posts.classList.add('lineDown');
    comments.classList.add('lineDown')
}

d3.onclick = function () {
    header.classList.add('lineDown');
    user.classList.add('lineDown');
    posts.classList.add('lineDown');
    comments.classList.add('lineDown')
}

user.onclick = function () {
    header.classList.add('lineDown');
    user.classList.add('lineDown');
    posts.classList.add('lineDown');
    comments.classList.add('lineDown')
}

let url = new URL (location.href);
let id = url.searchParams.get('id');
let pid = url.searchParams.get('pid');

// user

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(value => {
        link_a.setAttribute('href' , `user-details.html?id=${id}`);
        link_a.setAttribute('onclick', `url=this.href;setTimeout(\'location.href=url\',2000);this.href=\'javascript:void(0)\';`)

        let u_div = document.createElement('div');
        u_div.classList.add('username-div');
        let h4 = document.createElement('h3');
        h4.classList.add('username');
        h4.innerText = `@${value.username}`.toUpperCase()

        let n_div = document.createElement('div');
        n_div.classList.add('name-div');
        let p = document.createElement('p');
        p.classList.add('name');
        p.innerText = `${value.name}`;

        let e_div = document.createElement('div');
        e_div.classList.add('email-div');
        let e_p = document.createElement('p');
        e_p.classList.add('email');
        e_p.innerText = `${value.email}`.toLowerCase();


        user.append(u_div, n_div, e_div);
        u_div.appendChild(h4);
        n_div.appendChild(p);
        e_div.appendChild(e_p);

    })

// post

fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`)
    .then(response => response.json())
    .then(value => {
                let div_post = document.createElement('div');
                div_post.classList.add('div-post');

                let title_div = document.createElement('div');
                title_div.classList.add('title-div')
                let title = document.createElement('h4');
                title.classList.add('title')
                title.innerText = value.title;

                let p_div = document.createElement('div')
                p_div.classList.add('post-div');
                let p_post = document.createElement('p');
                p_post.classList.add('desc');

                p_post.innerText = value.body;

                posts.appendChild(div_post);
                title_div.appendChild(title);
                p_div.appendChild(p_post);
                div_post.append(title_div, p_post);
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${pid}/comments`)
    .then(response => response.json())
    .then(value => {
        for (const commentElement of value) {
            let comment_div = document.createElement('div');
            comment_div.classList.add('comment-div');

            let name_comment_div = document.createElement('div');
            name_comment_div.classList.add('name-comment-div');

            let comment_name = document.createElement('h4');
            comment_name.classList.add('comment-name')
            comment_name.innerText = `${commentElement.name}`;

            let comment_body_div = document.createElement('div');
            comment_body_div.classList.add('comment-body-div');

            let comment_body = document.createElement('p');
            comment_body.classList.add('comment');
            comment_body.innerText = `${commentElement.body}`;

            comments.appendChild(comment_div);
            comment_div.append(name_comment_div, comment_body_div);
            name_comment_div.appendChild(comment_name);
            comment_body_div.appendChild(comment_body);
        }
    })

// anim

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 355,
            "density": {
                "enable": true,
                "value_area": 789.1476416322727
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});