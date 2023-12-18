Tech Stack used in development : 
	**React.js :**
			Used for development of frontend.
	**Tailwind CSS :**
			Used for designing the frontend.
	**Mongoose Database :**
			To store the data of all the people who applied for any YOGA class.
	**Node.js :**
			Used for providing interface for frontend and backend.
	**Express.js :**
			Used for backend development.
	**Stripe-checkout :**
			Used to for implementing payment gateway to the form.
	**Render.com :**
			Used for hosting backend services online.
	**Netlify.com :**
			Used for hosting frontend applications online.

**Point 0.**
As given in the problem the fees for the yoga class is 500 INR. So in the payment function i fixed payment to 500/-.
One person is allowed in one batch so I provide all batch timing in the drop down button so that each can select only one batch.
**To check the full functionality of form please reach out the** 
https://stunning-cocada-7d92bc.netlify.app/ 

**To checkout the code please reach out the** 
https://github.com/sahil1412/form

**Point 1.**
 All the data accepted by backend and saved on the mongoose database which can be accessed whenever it is required.
All Validations are done on the backend. For example if a person had made payment but due to some reason he is unable to complete the submission then his information is stored in backend whenever he tries to complete then its information is matched with the stored information if matched then he need not to make payment again and his form is submitted with the previous payment.
If any person has not paid earlier or now  and tries to submit the form then that person gets a message “please make payment first”.

**Point 2.**
E-R diagram
In the given problem as mentioned one person can enroll in one batch and he/she can change it after the completion of a month.
So I took a **1:1 relation** between person and batch.
I’m taking Email id as primary key.
Age can be derived from a person's date of birth so I took age as a weak entity.

**Point 3.**
CompletePayment functionality is implemented using Stripe-checkout. Stripe Checkout is a prebuilt, optimized payment form that lets merchants easily and securely accept payments online. 

**Point 4.**
On completion of payment “payment successfully !!!” message is displayed on the screen.
If some error occurs then “please try again …” message is displayed on the screen.

**Point 5.**
Completely working form is hosted. For frontend part Netlify.com is used for hosting and for backend part Render.com is used for hosting.
