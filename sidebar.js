function includeSidebar() {
    // Create a container for the sidebar
    const sidebarContainer = document.createElement('div');
    sidebarContainer.id = 'sidebar-container';
    
    // Add styles for the main content
    const style = document.createElement('style');
    style.textContent = `
        .main-content {
            margin-left: 250px;
            width: calc(100% - 250px);
            min-height: 100vh;
        }
        
        @media (max-width: 768px) {
            .main-content {
                margin-left: 0;
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);

    // Fetch the sidebar content
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            // Create a temporary container to parse the HTML
            const temp = document.createElement('div');
            temp.innerHTML = data;
            
            // Get the sidebar content
            const sidebar = temp.querySelector('.sidebar');
            
            // Insert the sidebar at the beginning of the body
            document.body.insertBefore(sidebar, document.body.firstChild);
            
            // Wrap the existing content in a main-content div
            const mainContent = document.createElement('div');
            mainContent.className = 'main-content';
            
            // Move all existing content into the main-content div
            while (document.body.firstChild !== sidebar) {
                mainContent.appendChild(document.body.firstChild);
            }
            
            // Add the main-content div after the sidebar
            document.body.appendChild(mainContent);
        })
        .catch(error => console.error('Error loading sidebar:', error));
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', includeSidebar); 