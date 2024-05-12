const { searchVid } = require("./../controllers/searchController");

jest.mock('child_process', () => ({
    execFile: jest.fn()
}));

const res = {
    send: jest.fn((x)=> x),
    json: jest.fn((x)=> x),
    status: jest.fn()
}

it("it should  return the title for a valid existing video", () => {
    const req = {
        params: {
        url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        },
    };
    const mockedData = "COSTA RICA IN 4K 60fps HDR (ULTRA HD)\nhttps://i.ytimg.com/vi_webp/LXb3EKWsInQ/maxresdefault.webp" 
    require('child_process').execFile.mockImplementation((command, myargs, callback) => {
        callback(null, mockedData);
    });

    searchVid(req, res);
    expect(res.json).toHaveBeenCalledWith({
        title:"COSTA RICA IN 4K 60fps HDR (ULTRA HD)",
        imageSource:"https://i.ytimg.com/vi_webp/LXb3EKWsInQ/maxresdefault.webp",
        url: req.params.url
    });
});


it("it should  return status 400  for an  invalid  video", () => {
    const req = {
        params: {
        url: "https://www.youtube.com/watch?v=LXb3ExasasKWsInQ",
        },
    };
    //const mockedData = "COSTA RICA IN 4K 60fps HDR (ULTRA HD)\nhttps://i.ytimg.com/vi_webp/LXb3EKWsInQ/maxresdefault.webp" 
    require('child_process').execFile.mockImplementation((command, myargs, callback) => {
        callback(true, null);
    });
    
    searchVid(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    });
    
    




