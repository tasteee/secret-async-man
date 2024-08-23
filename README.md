![secret-async-man](/logo.png)

# Secret Async Man (sam) | A Covert Operative for Your Async Operations

sam helps you keep your async operations undercover in React 19. it is stealthy, efficient, and undetectable...
...and miniscule. prolly only like a byte or two idk. -- almost as miniscule as the problem sam solves.

```
npm i secret-async-man
```

### Mission Briefing: Operation Silent Async

#### Codename: Whisper Protocol

### Objective: Deploy Secret Async Man (sam) to neutralize React 19's warnings about async functions in event handlers.

### Situation: React 19 has introduced enhanced capabilities for handling async operations, but it has also become more vigilant about detecting unauthorized async activity in certain areas. Our mission is to maintain covert async operations without triggering React's alarm systems.

## What sam does

-   Stealth Wrapper: sam provides a covert wrapper for your async functions.
-   Warning Suppression: Silently neutralizes React 19's warnings about async event handlers.
-   Seamless Integration: Can be deployed in both event handlers and useEffect hooks.

## How to deploy sam

```javascript
import { sam } from 'secret-async-man'

const handleClick = asnc (event) => {
  // do covert async stuff.
}

<button onClick={sam(handleClick)}>click me</button>
```

```javascript
import { sam } from 'secret-async-man'

const handleClick = sam(async () => {
  // go undercover
})

<button onClick={handleClick}>click me</button>
```

```javascript
import { useSam } from "secret-async-man";

useSam(async () => {
    // make a clean exit
}, []);
```

## Operational Security

-   Maintain plausible deniability. sam's operations should appear as standard synchronous code to React's inspection systems.
-   Do not discuss sam's true purpose in code comments or documentation.
-   Be prepared to adapt quickly. React's detection methods may evolve, requiring updates to sam.

Remember, agents, your mission is to keep your async operations off React's radar.
Good luck, and may your async functions remain undetected.

This briefing will self-destruct in 5... 4... 3...
