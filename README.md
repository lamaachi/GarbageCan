# Garbage Can Monitoring App (React Native + Expo)

This project is a mobile application built with React Native and Expo that monitors the fill level and gas levels of an IoT-enabled garbage can. It provides a user-friendly interface to visualize real-time data and receive alerts when certain thresholds are met.

## Features

*   **Real-time Data Visualization:**
    *   Displays the current fill level of the garbage can using a progress bar.
    *   Indicates the gas level status (Safe, Warning, Alert) with color-coded icons and numerical values (ppm).
*   **Simulated Data Updates:**
    *   Simulates data coming from an IoT sensor using a timer-based update mechanism (for demonstration purposes).
*   **User Interface:**
    *   Clean and intuitive design for easy monitoring.
    *   Clear visual hierarchy to emphasize important information.

## Prerequisites

Before you begin, ensure you have met the following requirements:

*   **Node.js and npm:** You'll need Node.js (which includes npm) installed on your system. Download it from [https://nodejs.org/](https://nodejs.org/).
*   **Expo CLI:** Install the Expo CLI globally using:

    ```bash
    npm install --global expo-cli
    ```

*   **Expo Go App (or Development Client):**
    *   To run the app during development, you'll need either the Expo Go app installed on your physical device or a simulator/emulator set up on your computer.
    *   Alternatively, you can create a development client, which is recommended for more advanced use cases involving custom native code.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/lamaachi/GarbageCan
    cd GarbageCan
    ```

2. **Install dependencies:**

    ```bash
    npx expo install
    ```

## Running the App

1. **Start the development server:**

    ```bash
    npx expo start
    ```

2. **Open the app:**
    *   **Expo Go (Physical Device):** Scan the QR code displayed in the terminal or in your browser using the Expo Go app on your device.
    *   **Simulator/Emulator:** Press `i` to open in an iOS simulator or `a` to open in an Android emulator (if you have them set up).

## Further Development

This project serves as a basic example. Here are some potential improvements and extensions:

*   **Integrate with Real IoT Data:** Replace the simulated data with actual data from a real IoT garbage can sensor using APIs or protocols like MQTT or HTTP.
*   **Advanced Visualizations:** Add charts (e.g., line graphs for trends), gauges, or other visual elements to display data in more informative ways.
*   **Map Integration:** If monitoring multiple garbage cans, use `react-native-maps` to display their locations and statuses on a map.
*   **Push Notifications:** Implement push notifications using `expo-notifications` to alert users when the garbage can is full or gas levels are critical.
*   **User Authentication:** Add user login and profiles to allow users to manage multiple garbage cans.
*   **Historical Data:** Store and display historical data for analysis and reporting.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements or report bugs.


