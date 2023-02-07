$(function() {
    $.getJSON("assets/prefixCommands.json", function(prefixData) {
        for (const category in prefixData) {
        let categoryCommands = prefixData[category];
        $("#prefixTable").append(`
            <tr>
            <td>${category}</td>
            <td>
                <ul>
                ${categoryCommands.map(command => `<li>${command.name} - ${command.description}</li>`).join('')}
                </ul>
            </td>
            </tr>
        `);
        }
    });

    $.getJSON("assets/slashCommands.json", function(slashData) {
        for (const category in slashData) {
            let categoryCommands = slashData[category];
            $("#slashTable").append(`
                <tr>
                <td>${category}</td>
                <td>
                    <ul>
                    ${categoryCommands.map(command => `<li>${command.name} - ${command.description}</li>`).join('')}
                    </ul>
                </td>
                </tr>
            `);
        }
    });
});