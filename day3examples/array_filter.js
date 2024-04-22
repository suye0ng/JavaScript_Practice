let persons=[
    {
        name: "유재석",
        point: 78,
        city: "서울"
    },
    {
        name: "김종국",
        point: 92,
        city: "서울"
    },
    {
        name: "양세찬",
        point: 76,
        city: "제주"
    },
    {
        name: "하하",
        point: 81,
        city: "서울"
    }
];

let pass = persons.filter(function(person){
    return person.point > 80;
})