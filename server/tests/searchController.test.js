const { searchVid } = require("./../controllers/searchController");
const childProcess = require("child_process");

jest.mock("child_process");

it("it should  return the title for a valid existing video", () => {
  const req = {
    body: {
      url: "https://www.youtube.com/watch?v=giywdKF4SXY",
    },
  };
  const res = null;

  const mockExec = jest.spyOn(childProcess, "exec");
  mockExec.mockImplementation((command, callback) => {
    console.log("MOCKED");
    console.log(command);
    // Mock the behavior of child_process.exec
    // For example, you can simulate a successful execution:
    callback(null, "Mocked output", "Mocked error");
  });

  searchVid(req, res);

  expect(mockExec).toHaveBeenCalledWith(
    // Add your expected command here
    "your-command",
    expect.any(() => console.log("printed"))
  );
});
