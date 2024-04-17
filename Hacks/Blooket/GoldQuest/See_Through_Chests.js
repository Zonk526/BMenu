let alreadySetQuestionGH = false;
let alreadySetPrizeGH = false;
var GQJsonFIleforPictures = {
    'gold': `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2
    NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCA1OS41NDQzMDEgMzUuOTM2ODcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlI
    gogICB3aWR0aD0iNTkuNTQ0MyIKICAgaGVpZ2h0PSIzNS45MzY4NzEiPjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGExMDA4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMTAwNiIgLz4KCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo8ZwogICB0cmFuc2Zvcm09Im1hdHJpeCgwLjExNjMyNDI3LDAsMCwwLjExNjMyNDI3LDAsLTExLjgwMzc3MykiCiAgIGlkPSJnMTU3NyI+PHBvbHlnb24KICAgICBzdHlsZT0iZmlsbDojZjZiYjQyIgogICAgIHBvaW50cz0iMCwzMzguMjA3IDEyNS43NTMsMzc0LjMyNCAzODYuMTMsMjU4LjUzMSAzNTAuMjE2LDE3Ni41NzIgMjc4LjM3NCwxNTguNjE1IDM3LjAzOCwyNjQuMTIzICIKICAgICBpZD0icG9seWdvbjk1NSIgLz48cG9seWdvbgogI
    CAgIHN0eWxlPSJmaWxsOiNmZmNlNTQiCiAgICAgcG9pbnRzPSIzODYuMTMsMjU4LjUzMSAzNTAuMjE2LDE3Ni41NzIgMTA3Ljc1NiwyODQuMzQ1IDEyNS43NTMsMzc0LjMyNCAiCiAgICAgaWQ9InBvbHlnb245NTciIC8+PHBvbHlnb24KICAgICBzdHlsZT0iZmlsbDojZThhYTNkIgogICAgIHBvaW50cz0iMTI1Ljc1MywzNzQuMzI0IDEwNy43NTYsMjg0LjM0NSAzNy4wMzgsMjY0LjEyMyAwLjAxNSwzMzguMjA3ICIKICAgICBpZD0icG9seWdvbjk1OSIgLz48cG9seWdvbgogICAgIHN0eWxlPSJmaWxsOiNmNmJiNDIiCiAgICAgcG9pbnRzPSIxMjUuNzUzLDM3NC4zMjQgMjUxLjUwNCw0MTAuNDEgNTExLjg4MiwyOTQuNjI1IDQ3NS45NjksMjEyLjY4MiA0MDQuMTI3LDE5NC43MTcgMTYyLjc5MSwzMDAuMjMyICIKICAgICBpZD0icG9seWdvbjk2MSIgLz48cG9seWdvbgogICAgIHN0eWxlPSJmaWxsOiNmZmNlNTQiCiAgICAgcG9pbnRzPSI1MTEuODgyLDI5NC42MjUgNDc1Ljk2OSwyMTIuNjgyIDIzMy41MDgsMzIwLjQzMSAyNTEuNTA0LDQxMC40MSAiCiAgICAgaWQ9InBvbHlnb245NjMiIC8+PHBvbHlnb24KICAgICBzdHlsZT0iZmlsbDojZThhYTNkIgogICAgIHBvaW50cz0iMjUxLjUwNCw0MTAuNDEgMjMzLjUwOCwzMjAuNDMxIDE2Mi43OTEsMzAwLjIzMiAxMjUuNzUzLDM3NC4zMjQgIgogICAgIGlkPSJwb2x5Z29uOTY1IiAvPjxwb2x5Z29uCiAgICAgc3R5bGU9ImZpbGw6I2Y2YmI0MiIKICAgICBwb2ludHM9IjY2Ljg0MywyNzIuNTE5IDE5Mi41OTYsMzA4LjYyMSA0MzIuMjQ1LDIwMS4zNzkgMzk2LjMxNiwxMTkuNDI5IDMyNC40ODgsMTAxLjQ3MyAxMDMuODY3LDE5OC40MzUgIgogICAgIGlkPSJwb2x5Z29uOTY3IiAvPjxw
    b2x5Z29uCiAgICAgc3R5bGU9ImZpbGw6I2ZmY2U1NCIKICAgICBwb2ludHM9IjQzMi4yNDUsMjAxLjM3OSAzOTYuMzE2LDExOS40MjkgMTc0LjYsMjE4LjY0MSAxOTIuNTk2LDMwOC42MjEgIgogICAgIGlkPSJwb2x5Z29uOTY5IiAvPjxwb2x5Z29uCiAgICAgc3R5bGU9ImZpbGw6I2U4YWEzZCIKICAgICBwb2ludHM9IjE5Mi41OTYsMzA4LjYyMSAxNzQuNiwyMTguNjQxIDEwMy44NjcsMTk4LjQzNSA2Ni44NDMsMjcyLjUxOSAiCiAgICAgaWQ9InBvbHlnb245NzEiIC8+PGcKICAgICBpZD0iZzk3MyI+CjwvZz48ZwogICAgIGlkPSJnOTc1Ij4KPC9nPjxnCiAgICAgaWQ9Imc5NzciPgo8L2c+PGcKICAgICBpZD0iZzk3OSI+CjwvZz48ZwogICAgIGlkPSJnOTgxIj4KPC9nPjxnCiAgICAgaWQ9Imc5ODMiPgo8L2c+PGcKICAgICBpZD0iZzk4NSI+CjwvZz48ZwogICAgIGlkPSJnOTg3Ij4KPC9nPjxnCiAgICAgaWQ9Imc5ODkiPgo8L2c+PGcKICAgICBpZD0iZzk5MSI+CjwvZz48ZwogICAgIGlkPSJnOTkzIj4KPC9nPjxnCiAgICAgaWQ9Imc5OTUiPgo8L2c+PGcKICAgICBpZD0iZzk5NyI+CjwvZz48ZwogICAgIGlkPSJnOTk5Ij4KPC9nPjxnCiAgICAgaWQ9ImcxMDAxIj4KPC9nPjwvZz4KPC9zdmc+`,
    'Dragon': `https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/dragon.svg`,
    'Unicorn': `https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/unicorn.svg`,
    'Fairy': `https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/fairy.svg`,
    'Wizard': `data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzAwIDM0NSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6I2ZmY2QwNTt9LmNscy0ze2ZpbGw6bm9uZTtzdHJva2U6I2NkOGUyYTtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6OC45OXB4O30uY2xzLTR7ZmlsbDojNWE0NTljO30uY2xzLTV7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy02e2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtMyk7fS5jbHMtN3tmaWxsOiM4YjVlM2M7fS5jbHMtOHtmaWxsOiM2NjQwMmQ7fS5jbHMtOXtmaWxsOiM0MjMwOGI7fS5jbHMtMTB7ZmlsbDojZmFiYzJlO30uY2xzLTEx
    e2ZpbGw6I2ZmZjt9LmNscy0xMntmaWxsOiM0MTQwNDI7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIxNTAiIHkxPSIzNTguMDYiIHgyPSIxNTAiIHkyPSIyMDEuNDYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmYWJjMmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjZDgwMjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSIyNjIuMjUiIHkxPSIyMjguNzciIHgyPSIyNzcuMTgiIHkyPSIyODMuMjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmYWJjMmUiIHN0b3Atb3BhY2l0eT0iMC4xIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjI3YmE1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0zIiB4MT0iNDIuNzUiIHkxPSIyMjEuNSIgeDI9IjE5LjUzIiB5Mj0iMjg4Ljc0IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50LTIiLz48L2RlZnM+PHRpdGxlPmJsb29rX3dpe
    mFyZDwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjYzLjYyLDM0NC44MUgzNi4zOEEzNi4zOCwzNi4zOCwwLDAsMSwwLDMwOC40M3YtNjZIMzAwdjY2QTM2LjM4LDM2LjM4LDAsMCwxLDI2My42MiwzNDQuODFaIi8+PHJlY3QgY2xhc3M9ImNscy0yIiB5PSI0NC44MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyNTMuMzkiIHJ4PSIzNi4zOCIvPjxsaW5lIGNsYXNzPSJjbHMtMyIgeDE9IjEyNi4yNSIgeTE9IjI4MC4yMyIgeDI9IjE3My43NSIgeTI9IjI4MC4yMyIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTIyMi40NiwyODEuNjljLTI2Ljg4LDQuNi0xNy45LDQ5LjYxLTE0LjU4LDYzLjEyaDU1Ljc0QTM2LjM4LDM2LjM4LDAsMCwwLDMwMCwzMDguNDNWMjgxLjI3QzI2Ni40NCwyODUuMzUsMjQ5LjU4LDI3NywyMjIuNDYsMjgxLjY5WiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTc3LjU0LDI4MS42OWMtMjcuMTItNC42NS00NCwzLjY2LTc3LjU0LS40MnYyNy4xNmEzNi4zOCwzNi4zOCwwLDAsMCwzNi4zOCwzNi4zOEg5Mi4xMkM5NS40NCwzMzEuMywxMDQuNDIsMjg2LjI5LDc3LjU0LDI4MS42OVoiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTUiIGN4PSIyNzEuNjMiIGN5PSIyNjMuMDYiIHJ4PSIxNy41OSIgcnk9IjEzLjg3Ii8+PGVsbGlwc2UgY2xhc3M9ImNscy02IiBjeD0iMjguMzciIGN5PS
    IyNjMuMDYiIHJ4PSIxNy41OSIgcnk9IjEzLjg3Ii8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMjYzLjYyLDQ0LjgxSDM2LjM4QTM2LjM4LDM2LjM4LDAsMCwwLDAsODEuMTlWMTY4LjdhMTU5LjYyLDE1OS42MiwwLDAsMCwzNS4wOSwzLjg2YzUxLjUxLDAsOTUuNzQtMjQuMDgsMTE0LjkxLTU4LjQ3LDE5LjE3LDM0LjM5LDYzLjQsNTguNDcsMTE0LjkxLDU4LjQ3QTE1OS42MiwxNTkuNjIsMCwwLDAsMzAwLDE2OC43VjgxLjE5QTM2LjM4LDM2LjM4LDAsMCwwLDI2My42Miw0NC44MVoiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTgiIGN4PSI3Ny44NSIgY3k9Ijc4LjcxIiByeD0iNjcuMTciIHJ5PSIxOS40NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2LjQxIDIwLjY2KSByb3RhdGUoLTEzLjY5KSIvPjxlbGxpcHNlIGNsYXNzPSJjbHMtOSIgY3g9Ijc2LjIyIiBjeT0iNzEuOTkiIHJ4PSI2Ny4xNyIgcnk9IjE5LjQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuODcgMjAuMDgpIHJvdGF0ZSgtMTMuNjkpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNDkuNjcsOS42NGwtMjMsNzIuNjNzMTkuNTEsNSw1MS4zOS0yLjc5UzEyNSw1OC4zMywxMjUsNTguMzNMNzEuMTIsNC40MUExMi45MiwxMi45MiwwLDAsMCw0OS42Nyw5LjY0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTg4LjYyLDQwLjI4LDkxLjMsNDQuN2EyLjIyLDIuMjIsMCwwLDAsMS43NywxLjA2bDUuMTYuMjlhMi4yMiwyLjIyLDAsMCwxLDEuNTUsMy42NmwtMy4zNywzLjkyYTIuMTcsMi4xNywwLDAsMC0uNDYsMmwx
    LjMxLDVhMi4yMSwyLjIxLDAsMCwxLTMsMi42MWwtNC43Ny0yYTIuMjIsMi4yMiwwLDAsMC0yLC4xOGwtNC4zNSwyLjhhMi4yMiwyLjIyLDAsMCwxLTMuNDEtMkw4MC4xMiw1N2EyLjIsMi4yLDAsMCwwLS44MS0xLjg5bC00LTMuMjdBMi4yMSwyLjIxLDAsMCwxLDc2LjIsNDhsNS0xLjE5YTIuMjMsMi4yMywwLDAsMCwxLjU2LTEuMzVsMS44Ny00LjgyQTIuMjIsMi4yMiwwLDAsMSw4OC42Miw0MC4yOFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik01OC42MSwxMS4xMSw1My4xLDEzYTIuNDgsMi40OCwwLDAsMS0yLjI4LS4zN2wtMS42OS0xLjI2TDQzLjU0LDI5YTIuNDIsMi40MiwwLDAsMSwuNzgsMS4xNUw0NiwzNS42OGEyLjQ4LDIuNDgsMCwwLDAsNC40LjdsMy4zNi00LjczYTIuNDksMi40OSwwLDAsMSwyLjA2LTFsNS44MS4wOGEyLjQ4LDIuNDgsMCwwLDAsMi00bC0zLjQ2LTQuNjdhMi40NSwyLjQ1LDAsMCwxLS4zNi0yLjI4bDEuODctNS41QTIuNDgsMi40OCwwLDAsMCw1OC42MSwxMS4xMVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik01OS4zMyw3OC40NkEyLjQ4LDIuNDgsMCwwLDEsNTksNzYuMThsMS44Ny01LjVhMi40OCwyLjQ4LDAsMCwwLTMuMTQtMy4xNmwtNS41MSwxLjg2QTIuNDgsMi40OCwwLDAsMSw0OS45MSw2OWwtNC42NS0zLjQ4YTIuNDksMi40OSwwLDAsMC00LDJsLjA3LDUuODFhMi41MSwyLjUxLDAsMCwxLTEuMDYsMi4wNmwtNC43NCwzLjM0YTIuNDksMi40OSwwLDAsMCwuNjksNC40MWwxLjYyLjVhMTI1LjY4LDEyNS42OCwwLDAsMCwyNC40Ni0xLjE4WiIvPjxjaXJjbGUgY2xhc3M9ImNscy0xMCIgY3g9IjI0Mi41OCIgY3k9IjIyMi41IiByPSIzNi40NSIvPjxjaXJjbGUgY2xhc3M9ImNscy0xMCIgY3g9IjU3LjQyIiBjeT0iMjIyLjUiIHI9IjM2LjQ1Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTExIiBjeD0iMjQyLjU4IiBjeT0iMjMyLjYyIiByPSIzNi40NSIvPjxjaXJjbGUgY2xhc3M9ImNscy0xMSIgY3g9IjU3LjQyIiBjeT0iMjMyLjYyIiByPSIzNi40NSIvPjxwYXRoIGNsYXNzPSJjbHMtMTIiIGQ9Ik04OS4xOCwyMjcuMzNBMTMuMjEsMTMuMjEsMCwwLDEsNzAsMjA5LjQyYTIzLDIzLDAsMSwwLDE5LjE5LDE3LjkxWm0tMzIsMTkuNzZhNS40Niw1LjQ2LDAsMSwxLDUuNDUtNS40NkE1LjQ1LDUuNDUsMCwwLDEsNTcuMTQsMjQ3LjA5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMTIiIGQ9Ik0yNTUuNjMsMjI3LjJhMTMuMjIsMTMuMjIsMCwwLDEtMTkuMDctMTcuNzcsMjQuMjUsMjQuMjUsMCwwLDAtMy4zMi0uMjQsMjMsMjMsMCwxLDAsMjIuMzksMThabS0zMi4yMiwxOS44OWE1LjQ2LDUuNDYsMCwxLDEsNS40Ni01LjQ2QTUuNDUsNS40NSwwLDAsMSwyMjMuNDEsMjQ3LjA5WiIvPjxlbGxpcHNlIGNsYXNzPSJjbHMtOCIgY3g9IjU4LjE5IiBjeT0iMTcxLjUxIiByeD0iMjkuNjEiIHJ5PSIxNy4xNyIvPjxlbGxpcHNlIGNsYXNzPSJjbHMtOCIgY3g9IjI0MS44MSIgY3k9IjE3MS41MSIgcng9IjI5LjYxIiByeT0iMTcuMTciLz48L3N2Zz4=`,
    'King': `https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/king.svg`,
    'Slime Monster': `https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/slimeMonster.svg`,
    'Elf': `https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/elf.svg`,
    'Jester': `https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/jester.svg`
};

let GQNewClassJSON = {};
let GQgoldClass, GQblookClass, GQblookContainerClass, GQchoiceImageClass, GQchoiceTextClass, ready = false;

function showChestItems(choiceForIMGTEXT, index, choiceForNewClass, stateNode) {
    if (stateNode.state.stage == "prize") {
        let imageGQ;
        let textGQ = choiceForIMGTEXT.text;
        let existingImg = document.querySelector(`div[class^='styles__choice${index + 1}'] > img`);
    
        if (choiceForIMGTEXT.blook) {
            imageGQ = GQJsonFIleforPictures[choiceForIMGTEXT.blook];
        } else {
            imageGQ = GQJsonFIleforPictures[choiceForIMGTEXT.type];
        }
    
        existingImg.src = imageGQ;
        if (choiceForIMGTEXT.type === "gold") existingImg.className = GQgoldClass;
        else {
            existingImg.className = GQblookClass;
    
            let newIMGDivHolder = document.createElement('div');
    
            document.querySelector(`div[class^='styles__choice${index + 1}']`).appendChild(newIMGDivHolder);
            newIMGDivHolder.classList.add(GQblookContainerClass, GQchoiceImageClass);
            newIMGDivHolder.appendChild(existingImg);
        }
    
        let textTagGQ = document.createElement('p');
        textTagGQ.textContent = textGQ;
        textTagGQ.className = GQchoiceTextClass;
    
        document.querySelector(`div[class^='styles__choice${index + 1}']`).appendChild(textTagGQ);
        document.querySelector(`div[class^='styles__choice${index + 1}']`).className = choiceForNewClass;
        document.querySelector(`div[class^='styles__headerInside']`).textContent = "Click Anywhere to Go Next";
    }
}

setInterval(() => {
    let { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    if (stateNode.state.stage == "question" && alreadySetQuestionGH != true) {
        stateNode.state.question.correctAnswers = stateNode.state.question.answers;
        alreadySetQuestionGH = true;
    } else if (stateNode.state.stage != "question") {
        alreadySetQuestionGH = false;
    }

    if (stateNode.state.stage == "prize" && alreadySetPrizeGH != true && ready == true) {
        alreadySetPrizeGH = true;

        stateNode.state.choices.forEach(({text, type, blook}, index) => {
            if (!blook) {
                blook = false;
            }

            const choiceForIMGTEXT = {
                text: text,
                type: type,
                blook: blook
            };

            const choiceforNewClass = GQNewClassJSON[index][`choice${index + 1}`];

            showChestItems(choiceForIMGTEXT, index, choiceforNewClass, stateNode);
        });
    } else if (stateNode.state.stage != "prize") {
        alreadySetPrizeGH = false;
    }

    let GQchoiceContainers = document.querySelectorAll(`[class*='styles__choiceContainer']`);

    if (GQchoiceContainers.length > 0 && (!GQgoldClass || !GQblookClass)) {
        document.querySelectorAll(`[class*='styles__choiceContainer']`).forEach((container, index) => {
            let GQnewContainerClass = container.classList[0];

            GQNewClassJSON[index] = {
                [`choice${index + 1}`]: GQnewContainerClass
            };
            
            GQchoiceTextClass = container.querySelector(`div[class^='styles__choiceText']`).className;

            if (container.querySelector(`div[class^='styles__blookContainer']`)) {
                GQblookContainerClass = container.querySelector(`div[class^='styles__blookContainer']`).classList[0];
                GQchoiceImageClass = container.querySelector(`div[class^='styles__blookContainer']`).classList[1];
                GQblookClass = container.querySelector(`div[class^='styles__blook']`).className;
            } 
            
            if (container.querySelector(`[class^='styles__goldImage']`)) {
                GQgoldClass = container.querySelector(`[class^='styles__goldImage']`).className;
            }
        });
    } else if (GQgoldClass && GQblookClass) {
        ready = true;
    }
}, 10);
