export default function New() {
  return (
    <div>
      <p>Add your dad joke:</p>
      <form method="POST">
        <div>
          {" "}
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" />
          </label>
        </div>
        <div>
          {" "}
          <label htmlFor="content">
            Content:
            <input type="text" name="content" id="content" />
          </label>
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
