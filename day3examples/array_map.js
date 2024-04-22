let userList = [
    {
      firstName: "재석",
      lastName: "유",
      email: "yu@gmail.com",
    },
    {
      firstName: "종국",
      lastName: "김",
      email: "kim@gmail.com",
    },
    {
      firstName: "세찬",
      lastName: "양",
      email: "yang@gmail.com",
    },
    {
      firstName: "석진",
      lastName: "지",
      email: "ji@gmail.com",
    },
];

//배열의 데이터가 객체일 때 배열에 담긴 객체를 새로운 형태의 객체로 변환해서 배열로 변환, map()
let userList2 = userList.map (function(user) {
  return(
    fullName = user.firstName + user.lastName,
    firstName = user.firstName,
    lastName = user.lastName,
    email = user.email
  )
  });