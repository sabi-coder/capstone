export default `
<!--
      The action attribute defines where on the server the form data should be sent
      The method attribute specifies the HTTP method (GET or POST)
    -->
    <div class="container">
    <form action="#" method="POST">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name..."
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />

      <label for="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        style="height: 200px"
      ></textarea>

      <input type="submit" value="Submit" />
    </form>
  </div>`;
