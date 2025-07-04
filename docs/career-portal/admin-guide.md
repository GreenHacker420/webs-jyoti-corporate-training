# Career Portal - Admin Guide

## 🎯 For HR Teams and Administrators

This comprehensive guide covers all administrative functions of the Webs Jyoti Career Portal, designed for HR professionals and system administrators.

## 🔐 Admin Access

### Accessing the Admin Dashboard
1. Navigate to `/careers/admin`
2. Use the secure login credentials
3. **Demo Credentials** (for testing):
   - Username: `admin`
   - Password: `websjyoti2024`

### Security Features
- **Secure Authentication**: Protected login system
- **Session Management**: Automatic timeout for security
- **Access Logging**: All admin actions are logged
- **Role-based Access**: Different permission levels available

## 📊 Dashboard Overview

### Main Statistics Panel
The dashboard provides real-time metrics:

**Application Metrics**
- **Total Applications**: All-time application count
- **Pending Review**: Applications awaiting initial review
- **Under Review**: Applications currently being evaluated
- **Shortlisted**: Candidates selected for interviews
- **Hired**: Successfully recruited candidates
- **Rejected**: Applications not selected

**Quick Actions**
- **Application Review**: Jump to pending applications
- **Candidate Management**: Access candidate database
- **System Settings**: Configure portal settings
- **Export Data**: Download application reports

### Visual Indicators
- **Color-coded Status**: Easy identification of application stages
- **Progress Bars**: Visual representation of application flow
- **Trend Indicators**: Month-over-month comparison
- **Alert Badges**: Urgent items requiring attention

## 📋 Application Management

### Viewing Applications

#### Application List
The main table displays:
- **Applicant Name** and contact information
- **Position(s) Applied**: Roles of interest
- **Experience Level**: Years of relevant experience
- **Current Location**: Applicant's city
- **Application Status**: Current stage in process
- **Applied Date**: Submission timestamp
- **Quick Actions**: Status update and view options

#### Detailed Application View
Click the **eye icon** to view complete application details:
- **Personal Information**: Full contact details
- **Professional Background**: Experience and skills
- **Applied Positions**: All selected roles
- **Uploaded CV**: Download and review resume
- **Application Timeline**: Status change history
- **Internal Notes**: Admin comments and observations

### Search and Filtering

#### Quick Search
Use the search bar to find applications by:
- **Applicant Name**: First or last name
- **Email Address**: Contact email
- **Phone Number**: Contact phone
- **Location**: Current city
- **Skills**: Technical expertise
- **Position**: Applied roles

#### Advanced Filters
**Status Filter**
- All Status
- Pending Review
- Under Review
- Shortlisted
- Rejected
- Hired

**Date Range Filter**
- Today's Applications
- This Week
- This Month
- Custom Date Range

**Position Filter**
- Filter by specific job openings
- Multiple position selection
- Department-wise filtering

**Experience Filter**
- Fresher (0 years)
- Entry Level (0-2 years)
- Mid Level (2-5 years)
- Senior Level (5-10 years)
- Leadership (10+ years)

#### Sorting Options
- **Date Applied**: Newest or oldest first
- **Applicant Name**: Alphabetical order
- **Experience**: Years of experience
- **Status**: Group by application stage

### Status Management

#### Available Status Options
1. **Pending Review**: Initial submission state
2. **Under Review**: HR team is evaluating
3. **Shortlisted**: Selected for interview process
4. **Rejected**: Application not selected
5. **Hired**: Successfully recruited

#### Updating Application Status
1. **Individual Update**: Use dropdown in application row
2. **Bulk Update**: Select multiple applications
3. **Status History**: View all status changes
4. **Automatic Notifications**: Applicants receive email updates

#### Status Change Workflow
```
Pending Review → Under Review → Shortlisted → Hired
                              ↘ Rejected
```

### Bulk Operations

#### Selecting Multiple Applications
- **Checkbox Selection**: Click checkboxes for individual applications
- **Select All**: Choose all visible applications
- **Filter Selection**: Select all applications matching current filters

#### Available Bulk Actions
- **Status Update**: Change status for multiple applications
- **Export Selected**: Download data for chosen applications
- **Add Notes**: Bulk comment addition
- **Delete Applications**: Remove multiple entries (use with caution)

## 📈 Data Export and Reporting

### CSV Export Features
**Standard Export** includes:
- Application ID and timestamp
- Applicant personal information
- Professional details and experience
- Applied positions and skills
- Current application status
- Contact information

**Custom Export Options**
- **Date Range**: Specify time period
- **Status Filter**: Export specific application stages
- **Field Selection**: Choose which data to include
- **Format Options**: CSV, Excel, or PDF reports

### Report Generation
**Weekly Reports**
- New applications summary
- Status change tracking
- Interview scheduling needs
- Hiring pipeline overview

**Monthly Analytics**
- Application volume trends
- Source analysis (how applicants found positions)
- Conversion rates by position
- Time-to-hire metrics

**Custom Reports**
- Position-specific analytics
- Skills demand analysis
- Geographic distribution
- Experience level breakdown

## 👥 Candidate Management

### Candidate Profiles
Each applicant has a comprehensive profile containing:
- **Personal Information**: Contact details and location
- **Professional Summary**: Experience and career highlights
- **Skills Matrix**: Technical and soft skills assessment
- **Application History**: All positions applied for
- **Interview Notes**: Feedback from interview process
- **Status Timeline**: Complete application journey

### Communication Tools
**Email Integration**
- **Automated Notifications**: Status change emails
- **Custom Messages**: Personalized communication
- **Interview Scheduling**: Calendar integration
- **Bulk Communication**: Group messaging capabilities

**Internal Notes System**
- **Private Comments**: Internal team communication
- **Interview Feedback**: Structured evaluation forms
- **Decision Rationale**: Document hiring decisions
- **Follow-up Reminders**: Task management integration

### Interview Management
**Scheduling Features**
- **Calendar Integration**: Sync with team calendars
- **Automated Invitations**: Send interview details
- **Reminder System**: Automatic follow-ups
- **Video Conference**: Integration with meeting platforms

**Evaluation Tools**
- **Structured Forms**: Consistent evaluation criteria
- **Scoring System**: Numerical assessment options
- **Collaborative Reviews**: Multi-interviewer feedback
- **Decision Matrix**: Weighted criteria evaluation

## ⚙️ System Configuration

### Position Management
**Adding New Positions**
1. Navigate to Position Management
2. Click "Add New Position"
3. Fill in position details:
   - Title and department
   - Location and experience requirements
   - Skills and qualifications
   - Job description and responsibilities
   - Salary range and benefits
4. Set application deadline
5. Activate position for applications

**Editing Existing Positions**
- Update job requirements
- Modify application deadlines
- Change position status (active/inactive)
- Update salary information

### Skills Database Management
**Adding New Skills**
- Skill name and category
- Description and requirements
- Popularity flag for featured skills
- Associated training programs

**Skill Categories**
- Analytics and Data Science
- Excel and Spreadsheet Tools
- Business Intelligence
- Programming Languages
- Cloud and Big Data
- Soft Skills and Training

### User Management
**Admin User Roles**
- **Super Admin**: Full system access
- **HR Manager**: Application and candidate management
- **Recruiter**: Limited application review access
- **Viewer**: Read-only access to reports

**Access Control**
- **Permission Matrix**: Define role capabilities
- **IP Restrictions**: Limit access by location
- **Session Management**: Control login duration
- **Audit Logging**: Track all admin actions

## 🔒 Security and Compliance

### Data Protection
**Privacy Compliance**
- **GDPR Compliance**: European data protection standards
- **Data Retention**: Automatic cleanup of old applications
- **Consent Management**: Track applicant permissions
- **Right to Deletion**: Remove applicant data on request

**Security Measures**
- **Encrypted Storage**: All data encrypted at rest
- **Secure Transmission**: HTTPS for all communications
- **Access Logging**: Monitor all system access
- **Regular Backups**: Automated data protection

### File Security
**CV and Document Handling**
- **Virus Scanning**: Automatic malware detection
- **File Type Validation**: Restrict to safe formats
- **Size Limitations**: Prevent system overload
- **Secure Storage**: Isolated file system access

## 📞 Support and Troubleshooting

### Common Issues

**Login Problems**
- **Forgotten Password**: Use password reset function
- **Account Locked**: Contact system administrator
- **Browser Issues**: Clear cache and cookies
- **Network Problems**: Check internet connection

**Application Display Issues**
- **Missing Applications**: Check filter settings
- **Slow Loading**: Reduce date range or apply filters
- **Export Failures**: Verify data selection and format
- **Status Update Errors**: Refresh page and retry

**Performance Optimization**
- **Large Datasets**: Use pagination and filters
- **Slow Searches**: Be specific with search terms
- **Export Timeouts**: Reduce data range
- **Browser Memory**: Close unnecessary tabs

### Getting Help
**Internal Support**
- **System Administrator**: Technical issues
- **HR Manager**: Process questions
- **IT Department**: Infrastructure problems
- **Training Team**: User education

**External Support**
- **Development Team**: Feature requests
- **Technical Support**: System bugs
- **Documentation**: User guides and tutorials
- **Community Forum**: User discussions

### Best Practices
**Daily Operations**
- **Review New Applications**: Check pending submissions
- **Update Status**: Keep application pipeline current
- **Respond to Inquiries**: Maintain communication
- **Monitor System**: Check for alerts or issues

**Weekly Tasks**
- **Generate Reports**: Review application metrics
- **Clean Up Data**: Archive old applications
- **Update Positions**: Modify job postings as needed
- **Team Sync**: Coordinate with hiring managers

**Monthly Activities**
- **System Backup**: Verify data protection
- **Performance Review**: Analyze system metrics
- **User Training**: Update team on new features
- **Security Audit**: Review access and permissions

## 📊 Analytics and Insights

### Key Performance Indicators (KPIs)
**Application Metrics**
- **Application Volume**: Total submissions per period
- **Conversion Rate**: Applications to hires ratio
- **Time to Hire**: Average days from application to offer
- **Source Effectiveness**: Which channels bring best candidates

**Quality Metrics**
- **Skill Match**: How well applicants match requirements
- **Experience Alignment**: Appropriate experience levels
- **Geographic Distribution**: Location-based analysis
- **Position Popularity**: Most applied-for roles

### Reporting Dashboard
**Real-time Widgets**
- **Application Counter**: Live submission tracking
- **Status Distribution**: Visual pipeline representation
- **Recent Activity**: Latest application updates
- **Alert Panel**: Items requiring attention

**Trend Analysis**
- **Monthly Comparisons**: Year-over-year growth
- **Seasonal Patterns**: Hiring cycle insights
- **Position Performance**: Role-specific metrics
- **Candidate Quality**: Skills and experience trends

---

**For additional support**: Contact the development team or refer to the [Technical Documentation](../api-reference.md)

**Last Updated**: January 2024  
**Version**: 1.0.0
