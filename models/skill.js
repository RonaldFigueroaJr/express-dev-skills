const skills = [
    {id: 12345, name: 'Communication', done:true},
    {id: 12346, name: 'Problem Solving', done:true},
    {id: 12347, name: 'Managment', done:true},
    {id: 12348, name: 'Planning', done:true}
]

module.exports = {
    getAll,
    getById,
    create,
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getById(id) {
    return skills.find(function(skill) {
        return skill.id === id 
    })
}  