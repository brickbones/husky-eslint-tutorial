const channel = "ieatwebsites";

const ytchannel = (name) => {
    return name === channel ? true : false;
};

console.log(ytchannel("ieatwebsites"));