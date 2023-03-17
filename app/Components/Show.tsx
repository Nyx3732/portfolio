export function myFunction(): void {
        const x: HTMLElement | null = document.getElementById("myDIV");
      
        if (x) {
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }
      }

      export function hideMyDiv(): void {
        const x = document.getElementById("myDIV");
        if (x) {
          x.style.display = "none";
        }
      }
      
