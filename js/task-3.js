const users = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ];

  const sortByDescendingFriendCount = (users) => {
    return users.toSorted((a, b) => a.friends.length - b.friends.length);
  };
  const getNamesSortedByFriendCount = users => {
    const names = [...users]
      .sort(({
          friends: firstFriend
        }, {
          friends: secondFriend
        }) =>
        firstFriend.length - secondFriend.length)
      .map(({
        friends
      }) => friends);
  
  
    return names;
  };
  
  console.log(getNamesSortedByFriendCount(users));