let main = document.getElementById('main');
let header = document.getElementById('header');
let d2 = document.getElementById('dropdown2');
let d3 = document.getElementById('dropdown3');

let f_users = document.getElementById('users');

main.onclick = function () {
    header.classList.add('lineDown');
    f_users.classList.add('lineDown');
}

d2.onclick = function () {
    header.classList.add('lineDown');
    f_users.classList.add('lineDown');
}

d3.onclick = function () {
    header.classList.add('lineDown');
    f_users.classList.add('lineDown');
}

f_users.onclick = function () {
    header.classList.add('lineDown');
    f_users.classList.add('lineDown');
}

// fetch

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {

            let div = document.createElement('div');
            div.classList.add('user');
            div.classList.add('opacity');
            div.setAttribute('id', 'user')

            let divh1 = document.createElement('div');
            divh1.classList.add('text-div')

            let h5 = document.createElement('h5');
            h5.classList.add('text');
            h5.innerText = `@${user.username}`;

            let divmail = document.createElement('div');
            divmail.classList.add('mail-div');

            let p = document.createElement('p');
            p.classList.add('text-mail')
            p.innerText = `contact: ${user.email}`;

            // post

            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    for (let i = 0; i < 1; i++) {
                        const post = posts[i];
                        if (user.id === post.userId) {
                            let a = document.createElement('a');
                            a.setAttribute('href' , `post-details.html?id=${user.id}&pid=${post.id}`);
                            a.setAttribute('onclick', `url=this.href;setTimeout(\'location.href=url\',2000);this.href=\'javascript:void(0)\';`)
                            a.setAttribute('id', `pk-${user.id}`)
                            a.classList.add('link-a');

                            let div_post = document.createElement('div');
                            div_post.classList.add('div-post');

                            let p_post = document.createElement('p');
                            p_post.classList.add('p-post');

                            p_post.innerText = `Title: ${post.title}`

                            f_users.appendChild(a);
                            a.appendChild(div)

                            div.appendChild(div_post);
                            div_post.appendChild(p_post);
                        }

                    }
                })
            div.append(divh1, divmail);
            divh1.appendChild(h5);
            divmail.appendChild(p);
        }
    });