# Readme

## Details

This project was created to deploy a CAP backend for the incident management use case (ACME) for SAP TechED 2023.

## Pre Requisite

A HANA DB must be running in the sub-account. This [tutorial](https://developers.sap.com/tutorials/hana-cloud-deploying.html) can act as a guide.

## Important Commands

- To install dependencies `npm install`
- To build the app `mbt build`
- To dpeloy the app `cf deploy mta_archives/MobileIncidentManagement_1.0.0.mtar `
- To undeploy the app `cf undeploy MobileIncidentManagement --delete-services --delete-service-keys --delete-service-brokers -f`

## CAP Generated ReadMe

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


### Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


### Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
