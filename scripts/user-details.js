let main = document.getElementById('main');
let header = document.getElementById('header');
let d2 = document.getElementById('dropdown2');
let d3 = document.getElementById('dropdown3');

let user = document.getElementById('user');
let contacts = document.getElementById('contacts');
let address = document.getElementById('address');
let company_1 = document.getElementById('company');

let posts = document.getElementById('posts');

let url = new URL (location.href);
let id = url.searchParams.get('id');

main.onclick = function () {
    header.classList.add('lineDown');
    user.classList.add('lineDown');
    posts.classList.add('lineDown');
    contacts.classList.add('lineDown');
    address.classList.add('lineDown');
    company_1.classList.add('lineDown');
    posts.classList.add('lineDown');
}

d2.onclick = function () {
    header.classList.add('lineDown');
    user.classList.add('lineDown');
    posts.classList.add('lineDown');
    contacts.classList.add('lineDown');
    address.classList.add('lineDown');
    company_1.classList.add('lineDown');
    posts.classList.add('lineDown');
}

d3.onclick = function () {
    header.classList.add('lineDown');
    user.classList.add('lineDown');
    posts.classList.add('lineDown');
    contacts.classList.add('lineDown');
    address.classList.add('lineDown');
    company_1.classList.add('lineDown');
    posts.classList.add('lineDown');
}

posts.onclick = function () {
    header.classList.add('lineDown');
    user.classList.add('lineDown');
    posts.classList.add('lineDown');
    contacts.classList.add('lineDown');
    address.classList.add('lineDown');
    company_1.classList.add('lineDown');
    posts.classList.add('lineDown');
}

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(value => {
        //  username
        let username_div = document.createElement('div');
        username_div.classList.add('username-div');

        let username = document.createElement('h3');
        username.classList.add('username');
        username.innerText = `@${value.username}`.toUpperCase();

        // contacts ( name, email, phone, website )
        let contacts_h_div = document.createElement('div');
        contacts_h_div.classList.add('contacts-h-div');

        let contacts_h = document.createElement('h4');
        contacts_h.classList.add('contacts-text');
        contacts_h.innerText = 'Contacts';

        let name_div = document.createElement('div');
        name_div.classList.add('name-div');

        let name = document.createElement('p');
        name.classList.add('name-text');
        name.innerText = `Name: ${value.name}`;

        let email_div = document.createElement('div');
        email_div.classList.add('name-div');

        let email = document.createElement('p');
        email.classList.add('email-text');
        email.innerText = `Email: ${value.email.toLowerCase()}`;

        let phone_div = document.createElement('div');
        phone_div.classList.add('phone-div');

        let phone = document.createElement('p');
        phone.classList.add('phone-number');
        phone.innerText = `Phone number: ${value.phone}`;

        let website_div = document.createElement('div');
        website_div.classList.add('website-div');

        let website = document.createElement('p');
        website.classList.add('website');
        website.innerText = `Website: ${value.website}`;

        // address (street suite city zipcode)
            let address_h_div = document.createElement('div');
            address_h_div.classList.add('address-h-div');

            let address_h = document.createElement('h4');
            address_h.classList.add('address-text');
            address_h.innerText = 'Address';

            let street_div = document.createElement('div');
            street_div.classList.add('street-div');

            let street = document.createElement('p');
            street.classList.add('street-text');
            street.innerText = `Street: ${value.address.street}`;

            let suite_div = document.createElement('div');
            suite_div.classList.add('suite-div');

            let suite = document.createElement('p');
            suite.classList.add('suite-text');
            suite.innerText = `Suite: ${value.address.suite}`;

            let city_div = document.createElement('div');
            city_div.classList.add('city-div');

            let city = document.createElement('p');
            city.classList.add('city-text');
            city.innerText = `City: ${value.address.city}`;

            let zipcode_div = document.createElement('div');
            zipcode_div.classList.add('zipcode-div');

            let zipcode = document.createElement('p');
            zipcode.classList.add('zipcode-text');
            zipcode.innerText = `Zipcode: ${value.address.zipcode}`;

            // company
        let company_div = document.createElement('div');
        company_div.classList.add('company-div');

        let company = document.createElement('h4');
        company.classList.add('company-text');
        company.innerText = 'Company'

        let company_name_div = document.createElement('div');
        company_name_div.classList.add('company-name-div');

        let company_name = document.createElement('p');
        company_name.classList.add('company-name');
        company_name.innerText = `Company name: ${value.company.name}`;

        let catch_phrase_div = document.createElement('div');
        catch_phrase_div.classList.add('catch-phrase-div');

        let catch_phrase = document.createElement('p');
        catch_phrase.classList.add('catch-phrase');
        catch_phrase.innerText = `Catch Phrase: ${value.company.catchPhrase}`;

        let bs_div = document.createElement('div');
        bs_div.classList.add('bs-div');

        let bs = document.createElement('p');
        bs.classList.add('bs');
        bs.innerText = `Bs: ${value.company.bs}`;

        // appneds

        user.appendChild(username_div);
        username_div.appendChild(username);

        contacts.append(contacts_h_div, name_div, email_div, phone_div, website_div);
        contacts_h_div.appendChild(contacts_h);
        name_div.appendChild(name);
        email_div.appendChild(email);
        phone_div.appendChild(phone);
        website_div.appendChild(website);

        address.append(address_h_div, street_div, suite_div, city_div, zipcode_div);
        address_h_div.appendChild(address_h);
        street_div.appendChild(street);
        suite_div.appendChild(suite);
        city_div.appendChild(city);
        zipcode_div.appendChild(zipcode);

        company_1.append(company_div, company_name_div, catch_phrase_div, bs_div);
        company_div.appendChild(company);
        company_name_div.appendChild(company_name);
        catch_phrase_div.appendChild(catch_phrase);
        bs_div.appendChild(bs);
    })

// post

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(value =>{
        for (const post of value) {
            let a = document.createElement('a');
            a.setAttribute('href', `post-details-user.html?id=${id}&pid=${post.id}`);
            a.setAttribute('onclick', `url=this.href;setTimeout(\'location.href=url\',2000);this.href=\'javascript:void(0)\';`)

            let post_1 = document.createElement('div');
            post_1.classList.add('post');
            post_1.classList.add('glow-on-hover');
            post_1.setAttribute('id', `${id}`);
            post_1.setAttribute('data-aos', 'fade-up');

            let post_title_div = document.createElement('div');
            post_title_div.classList.add('post-title-div');

            let post_title = document.createElement('h4');
            post_title.classList.add('post-title');
            post_title.innerText =`${post.title}`.split(' ')[0] + '...';

            let post_body_div = document.createElement('div');
            post_body_div.classList.add('post-body-div');

            let post_body = document.createElement('p');
            post_body.classList.add('post-body');
            post_body.innerText = `${post.body}`;

            posts.appendChild(a);
            a.appendChild(post_1);
            post_1.append(post_title_div, post_body_div);
            post_title_div.appendChild(post_title);
            post_body_div.appendChild(post_body);
        }
})