function clearDeck () {
    deck = [];
    showDeck();
}

function exportDeck () {
    var exported = [];
    $.each(deck, function (i, v) {
        exported.push(v.id);
    });
    exported = "deckList.php" + exported.toString();
    window.prompt("Copy to clipboard: C+Ctrl, Enter", exported);
}

function importDeckByUrl () {
    if (window.location.search != "") {
        deck = [];
        var a = window.location.search.substring(3).split(",");
        $.each(a, function (i, v) {
            deck.push(getCardById(parseInt(v)));
        });
        console.log();
        showDeck();
    }
}