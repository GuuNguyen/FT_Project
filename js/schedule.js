let now = new Date();
  const offSet = now.getDay() == 0 ? 6 : now.getDay() - 1;

  let startOfWeek = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - offSet
  );
  let endOfWeek = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + (6 - offSet)
  );

  document.querySelectorAll("#c-h > th").forEach((th, i) => {
    const date = new Date(
      startOfWeek.getFullYear(),
      startOfWeek.getMonth(),
      startOfWeek.getDate() + i
    );
    th.innerHTML = `${th.innerHTML.split(" ")[0]
      } <span>${date.toLocaleDateString(undefined,{day: 'numeric'})}</span>`;
  });

  document.getElementById("start-date").innerHTML =
    startOfWeek.toLocaleDateString();
  document.getElementById("end-date").innerHTML =
    endOfWeek.toLocaleDateString();

  function changeWeek(direction) {
    startOfWeek.setDate(startOfWeek.getDate() + direction * 7);
    endOfWeek.setDate(endOfWeek.getDate() + direction * 7);

    document.getElementById("start-date").innerHTML =
      startOfWeek.toLocaleDateString();
    document.getElementById("end-date").innerHTML =
      endOfWeek.toLocaleDateString();

    document.querySelectorAll("#c-h > th").forEach((th, i) => {
      const date = new Date(
        startOfWeek.getFullYear(),
        startOfWeek.getMonth(),
        startOfWeek.getDate() + i
      );
      th.innerHTML = `${th.innerHTML.split(" ")[0]
        } <span>${date.toLocaleDateString(undefined,{day: 'numeric'})}</span>`;
    });

    renderEvents();
  }

  const events = [
    {
      date: new Date(2022, 4, 25),
      employee: "DO SOMETHING",
      shift: "c-2",
    },
    {
      date: new Date(2022, 4, 25),
      employee: "DO SOMETHING",
      shift: "c-4",
    },
    {
      date: new Date(2022, 4, 29),
      employee: "DO SOMETHING",
      shift: "c-1",
    },
    {
      date: new Date(2022, 4, 29),
      employee: "DO SOMETHING",
      shift: "c-2",
    },
    {
      date: new Date(2022, 4, 30),
      employee: "DO SOMETHING",
      shift: "c-1",
    },
    {
      date: new Date(2022, 4, 30),
      employee: "DO SOMETHING",
      shift: "c-2",
    },
  ];

  function renderEvents() {
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 7; j++) {
        document.getElementById(`c-${i}`).children[j - 1].innerHTML = "";
      }
    }
    events.forEach((event) => {
      if (event.date >= startOfWeek && event.date <= endOfWeek) {
        const date = new Date(event.date);
        const dayOfWeek =
          date.getDay() == 0 ? 6 : date.getDay() == 6 ? 0 : date.getDay() - 1;
          document.querySelectorAll("#" + event.shift + " > td")[
          dayOfWeek
        ].innerHTML = `<div class="cell">${event.employee}</div>`;
      }
    });
  }

  renderEvents();