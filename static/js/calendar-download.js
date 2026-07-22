(function () {
  "use strict";

  function escapeIcs(value) {
    return String(value || "")
      .replace(/\\/g, "\\\\")
      .replace(/\r?\n/g, "\\n")
      .replace(/,/g, "\\,")
      .replace(/;/g, "\\;");
  }

  function utcStamp(value) {
    return new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  }

  function safeFilename(value) {
    return String(value || "parish-event")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "parish-event";
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".calendar-download-button");
    if (!button) return;

    var start = button.dataset.calendarStart;
    var end = button.dataset.calendarEnd;
    var title = button.dataset.calendarTitle;
    var description = button.dataset.calendarDescription;
    var location = button.dataset.calendarLocation;

    if (!start || !end || !title) return;

    var uid = utcStamp(start) + "-" + safeFilename(title) + "@triparishok.org";
    var ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Tri-Parish Catholic Community//Parish Event//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:" + uid,
      "DTSTAMP:" + utcStamp(new Date()),
      "DTSTART:" + utcStamp(start),
      "DTEND:" + utcStamp(end),
      "SUMMARY:" + escapeIcs(title),
      "DESCRIPTION:" + escapeIcs(description),
      "LOCATION:" + escapeIcs(location),
      "END:VEVENT",
      "END:VCALENDAR",
      ""
    ].join("\r\n");

    var blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = safeFilename(title) + ".ics";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });
})();
