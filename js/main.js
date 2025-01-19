const buttonExperience = document.getElementById("button-experience")
const buttonEducation = document.getElementById("button-education")

const workTimeline = document.getElementById("work-timeline")
const educationTimeline = document.getElementById("education-timeline")

buttonExperience.addEventListener('click', () => {
    buttonExperience.classList.add("active")
    buttonEducation.classList.remove("active")

    workTimeline.classList.add('show')
    workTimeline.classList.remove('hide')
    educationTimeline.classList.add('hide')
    educationTimeline.classList.remove('show')
})

buttonEducation.addEventListener('click', () => {
    buttonExperience.classList.remove("active")
    buttonEducation.classList.add("active")

    educationTimeline.classList.add('show')
    educationTimeline.classList.remove('hide')
    workTimeline.classList.add('hide')
    workTimeline.classList.remove('show')
})
