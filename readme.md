### An unofficial CLI -tool for flutterwave

###### How It Works.

1. To begin, simply initialize the application with `flw init -c` command in your terminal. This will set your private, public & a user-defined password for you. NB. these information are local to your machine.

2. Run `flw --help` for a list of flw's commands.

###### Commands and description.

1. **SubAccounts**
   - `flw subaccounts --all, flw subaccounts -a` - Fetchs all existing subaccounts
   - `flw subaccounts --unique _subaccountNum_, flw subaccounts -u _subaccountNum_` - Returns details of the subaccount supplied.
   - `flw subaccounts --create , flw subaccounts -c` - Allows you create a subaccount in the terminal.
   - `flw subaccounts --delete , flw subaccounts -d` - Deletes a subaccount.
2. **Transactions**
   - `flw transactions --all`,

NB: I am currently leaving out "create" parts of the tool for now! As, I think proper security should be included.

###### issues with the api-end of the application

1. fetch transactions returns all the readings, even when the from n to dates are specified.

2. the creation of subaccounts from the terminal doesn't verify the account numbers... and as a result cannot create and account.

3. the docx say you are passing tx_ref to verify a transaction, but it actually uses the id

#todo

- add tables to some response e.g. fetch all v. cards
- add next to navigate responses in the terminal
