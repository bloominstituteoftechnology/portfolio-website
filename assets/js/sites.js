const work = document.querySelector('#work'),
    sites = [
        {
            name: 'Chao Fever',
            url: 'https://brellin.github.io/chaofever/',
            class: 'cf',
            description: 'My first masterpiece, made at 15 years of age.'
        },
        {
            name: 'Silver Chao Fever',
            url: 'https://brellin.github.io/silvercf/',
            class: 'scf',
            description: 'The second iteration of Chao Fever, before neglecting my dream and joining the army.'
        },
        {
            name: 'Appraiser BFF',
            url: 'https://appraiser-ui.netlify.com/',
            class: 'appraiser-ui',
            description: 'A User Interface created from scratch for a collaborated project.'
        },
        {
            name: 'Instagram Clone',
            url: 'https://instagram-clone-wu.netlify.com/',
            class: 'ig-clone',
            description: 'Instagram clone that integrates search functionality within React.'
        },
    ];

class Site {
    constructor(props) {
        this.name = props.name;
        this.url = props.url;
        this.class = props.class;
        this.description = props.description;

        this.link = document.createElement('a');
        this.link.href = this.url;

        this.div = document.createElement('div');
        this.div.classList.add(this.class);

        this.header = document.createElement('h3');
        this.header.innerText = this.name;

        this.p = document.createElement('p');
        this.p.innerText = this.description;

        this.div.appendChild(this.header);
        this.div.appendChild(this.p);
        this.link.appendChild(this.div);
        work.appendChild(this.link);
    }
}

sites.forEach(site => new Site(site));