let sheetUrl = 'https://docs.google.com/spreadsheets/d/1WV4cRpi6ixjOczGGXspA5PdM88eqwnyyz-tUAbJmOcY/edit?usp=sharing'

let sheetID = '1WV4cRpi6ixjOczGGXspA5PdM88eqwnyyz-tUAbJmOcY'
let sheetAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`

const render = (projectsArr) => {
    console.log('this is projectsArr', projectsArr)
    const $project = $('#projects')
    projectsArr.forEach((project, index)=>{
        const $div = $('<div class="card" style="width: 20rem;">')
        $div.html(`<img src="${project.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn btn-primary">Live Project</a>
        </div>`)
        $project.append($div)
    })
}



$.ajax({url:sheetAsJSON})
    .then (data => {
        const projects = data.feed.entry.map(project => {
            return{
                title: project.gsx$title.$t,
                image: project.gsx$image.$t,
                description: project.gsx$description.$t,
                url: project.gsx$url.$t
            }
        })
        render(projects) 
        console.log('this is data:', data.feed.entry[0].gsx$title.$t)
        console.log('this is project:', projects)
    })







    


   
    






