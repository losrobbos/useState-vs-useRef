# useState vs useRef

## Demo 

A classical scenario:
We need to do validation of USER INPUT in a FORM. 

E.g. in a Signup form we want to check if the user really gave a valid email and a password that is long enough.

Question: WHEN exactly do we want to DO the validation (and show the result to the user)?

This demo shows the use cases for when to use "state" (=> the useState hook) and when to use refs (=> the useRef hook) for validating INPUT in a FORM.

Demo: https://usestate-vs-useref.vercel.app


## General clarification

Simply put:

If you want to that your user sees some VISUAL change in your UI IMMEDIATELY after data has changed => use "state" to store that data!

If you do not IMMEDIATELY want to show a VISUAL change in your UI, and just want to store the new data in the meantime for later usage => use refs!

